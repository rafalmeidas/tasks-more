import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import {
  collection,
  onSnapshot,
  deleteDoc,
  orderBy,
  addDoc,
  query,
  where,
  doc,
} from "firebase/firestore";
import { getSession } from "next-auth/react";
import { GetServerSideProps } from "next";
import { FiShare2 } from "react-icons/fi";
import { FaTrash } from "react-icons/fa";
import { Session } from "next-auth";
import Head from "next/head";
import Link from "next/link";

import { TextArea } from "../../components/textarea";
import { Button } from "@/components/button";

import { db } from "@/services/firebaseConnection";

import styles from "./styles.module.css";

interface DashboardProps extends Session {}

interface TaskProps {
  id: string;
  created: Date;
  public: boolean;
  task: string;
  user: string;
}

export default function Dashboard({ user }: DashboardProps) {
  const [input, setInput] = useState<string>("");
  const [publicTask, setPublicTask] = useState<boolean>(false);
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  function onChangeInput({ target }: ChangeEvent<HTMLTextAreaElement>) {
    setInput(target.value);
  }

  function onChangePublicTak({ target }: ChangeEvent<HTMLInputElement>) {
    setPublicTask(target.checked);
  }

  async function onShare(id: string) {
    await navigator.clipboard.writeText(
      `${process.env.NEXT_PUBLIC_URL}/task/${id}`
    );
  }

  async function onDelete(id: string) {
    try {
      const refDoc = doc(db, "tasks", id);
      await deleteDoc(refDoc);
    } catch (error) {
      console.log(error);
    }
  }

  function clearForm() {
    setInput("");
    setPublicTask(false);
  }

  async function onSubmit(event: FormEvent) {
    event.preventDefault();

    if (input.trim() === "") return;

    try {
      await addDoc(collection(db, "tasks"), {
        task: input,
        user: user?.email,
        public: publicTask,
        created: new Date(),
      });

      clearForm();
    } catch (error) {
      console.log(error);
    }
  }

  async function loadTasks() {
    const tasksRef = collection(db, "tasks");

    const q = query(
      tasksRef,
      orderBy("created", "desc"),
      where("user", "==", user?.email)
    );

    onSnapshot(q, (snapshot) => {
      let list = [] as TaskProps[];

      snapshot.forEach((doc) => {
        list.push({
          id: doc.id,
          task: doc.data().task,
          created: doc.data().created,
          public: doc.data().public,
          user: doc.data().user,
        });
      });

      setTasks(list);
    });
  }

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Meu painel de tarefas</title>
      </Head>
      <main className={styles.main}>
        <section className={styles.content}>
          <div className={styles.contentForm}>
            <h1 className={styles.title}>Qual sua tarefa?</h1>

            <form onSubmit={onSubmit}>
              <TextArea
                placeholder="Digite qual sua tarefa..."
                value={input}
                onChange={onChangeInput}
              />
              <div className={styles.checkboxArea}>
                <input
                  id="public-checkbox"
                  type="checkbox"
                  className={styles.checkbox}
                  checked={publicTask}
                  onChange={onChangePublicTak}
                />
                <label htmlFor="public-checkbox">Deixar tarefa pública?</label>
              </div>
              <Button type="submit">Registrar</Button>
            </form>
          </div>
        </section>

        <section className={styles.taskContainer}>
          <h1>Minhas tarefas</h1>

          {tasks.length === 0 ? (
            <span>A consulta não retornou tarefas</span>
          ) : (
            tasks.map(({ id, task, public: isPublic }) => (
              <article className={styles.task} key={id}>
                {isPublic ? (
                  <div className={styles.tagContainer}>
                    <label className={styles.tag}>PÚBLICO</label>
                    <button
                      className={styles.shareButton}
                      onClick={() => onShare(id)}
                    >
                      <FiShare2 size={22} color="#3183ff" />
                    </button>
                  </div>
                ) : null}

                <div className={styles.taskContent}>
                  {isPublic ? (
                    <Link href={`/task/${id}`}>
                      <p>{task}</p>
                    </Link>
                  ) : (
                    <p>{task}</p>
                  )}
                  <button
                    className={styles.trashButton}
                    onClick={() => onDelete(id)}
                  >
                    <FaTrash size={24} color="#ea3140" />
                  </button>
                </div>
              </article>
            ))
          )}
        </section>
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (!session?.user) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      user: {
        email: session?.user?.email,
      },
    },
  };
};
