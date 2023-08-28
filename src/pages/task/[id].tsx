import React, { ChangeEvent, FormEvent, useState } from "react";
import {
  collection,
  getDocs,
  addDoc,
  getDoc,
  query,
  where,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { useSession } from "next-auth/react";
import { GetServerSideProps } from "next";
import { FaTrash } from "react-icons/fa";
import Head from "next/head";

import { TextArea } from "../../components/textarea";
import { Button } from "../../components/button";

import { db } from "../../services/firebaseConnection";

import styles from "./styles.module.css";

interface CommentProps {
  id: string;
  comment: string;
  taskId: string;
  user: string;
  name: string;
}

interface TaskProps {
  task: {
    taskId: string;
    task: string;
    created: string;
    user: string;
    public: boolean;
  };
  comments: CommentProps[];
}

export default function Task({ task, comments: allComments }: TaskProps) {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<CommentProps[]>(allComments || []);

  const { data: session } = useSession();

  function onChangeComment({ target }: ChangeEvent<HTMLTextAreaElement>) {
    setComment(target.value);
  }

  async function onSubmit(event: FormEvent) {
    event.preventDefault();

    if (comment === "" || !session?.user?.email || !session?.user?.name) return;

    try {
      const docRef = await addDoc(collection(db, "comments"), {
        comment,
        created: new Date(),
        user: session.user.email,
        name: session.user.name,
        taskId: task.taskId,
      });

      const data: CommentProps = {
        id: docRef.id,
        comment,
        user: session.user.email,
        name: session.user.name,
        taskId: task.taskId,
      };

      setComments((prev) => [...prev, data]);

      setComment("");
    } catch (error) {
      console.log(error);
    }
  }

  async function onDelete(id: string) {
    try {
      const refDoc = doc(db, "comments", id);
      await deleteDoc(refDoc);

      setComments((prev) => prev.filter((comment) => comment.id !== id));
    } catch (error) {
      console.log(error);
    }
  }

  const isDisabled = comment === "" || !session;

  return (
    <div className={styles.container}>
      <Head>
        <title>Detalhes da tarefa</title>
      </Head>
      <main className={styles.main}>
        <h1>Tarefa</h1>
        <article className={styles.task}>
          <p>{task?.task}</p>
        </article>
      </main>

      <section className={styles.commentsContainer} onSubmit={onSubmit}>
        <h2>Deixar comentário</h2>
        <form>
          <TextArea
            placeholder={
              !session
                ? "Acesse para deixar seu comentário..."
                : "Digite seu comentário..."
            }
            onChange={onChangeComment}
            value={comment}
            disabled={!session}
            aria-disabled={!session}
          />
          <Button
            aria-label="enviar comentário"
            aria-disabled={isDisabled}
            disabled={isDisabled}
          >
            Enviar comentário
          </Button>
        </form>
      </section>

      <section className={styles.commentsContainer}>
        <h2>Todos os comentários</h2>
        {comments.length === 0 ? (
          <span>Nenhum comentário foi encontrado</span>
        ) : (
          comments.map(({ id, comment, name, user }) => (
            <article key={id} className={styles.comment}>
              <div className={styles.headComment}>
                <label className={styles.commentsLabel}>{name}</label>
                {user === session?.user?.email ? (
                  <button
                    className={styles.buttonTrash}
                    onClick={() => onDelete(id)}
                  >
                    <FaTrash size={18} color="#ea3140" />
                  </button>
                ) : null}
              </div>
              <p>{comment}</p>
            </article>
          ))
        )}
      </section>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params?.id as string;

  const docRef = doc(db, "tasks", id);

  const q = query(collection(db, "comments"), where("taskId", "==", id));
  const snapshotComments = await getDocs(q);

  let comments: CommentProps[] = [];

  snapshotComments.forEach((doc) => {
    comments.push({
      id: doc.id,
      comment: doc.data().comment,
      user: doc.data().user,
      name: doc.data().name,
      taskId: doc.data().taskId,
    });
  });

  const snapshot = await getDoc(docRef);

  if (snapshot.data() === undefined || !snapshot.data()?.public) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const milliseconds = snapshot.data()?.created.seconds * 1000;

  const task = {
    taskId: id,
    ...snapshot.data(),
    created: new Date(milliseconds).toLocaleDateString(),
  };

  return {
    props: {
      task,
      comments,
    },
  };
};
