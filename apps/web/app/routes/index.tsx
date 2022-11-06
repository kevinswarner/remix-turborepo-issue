import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { helloWorld } from "hello-world";

export async function loader() {
  const message = helloWorld();
  return json(message);
}

export default function Index() {
  const message = useLoaderData();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Remix - Turborepo Issue</h1>
      <p>
        Message from Hello World Library : <strong>{message}</strong>
      </p>
    </div>
  );
}
