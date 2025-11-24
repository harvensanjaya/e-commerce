import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  getFirestore,
  Timestamp,
} from "firebase/firestore";
import { readFile } from "node:fs/promises";

const firebaseConfig = {
  apiKey:
    "AIzaSyAB-9_XzpHEB2Tiah92RqDUoqz5A2x2IWQAIzaSyAB-9_XzpHEB2Tiah92RqDUoqz5A2x2IWQ",
  authDomain: "e-commerce-921fe.firebaseapp.com",
  projectId: "e-commerce-921fe",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const products = JSON.parse(
  await readFile(new URL("./products.json", import.meta.url), "utf8")
);

async function uploadProducts() {
  for (const item of products) {
    const productData = {
      ...item,
      uploaded_at: Timestamp.fromDate(new Date(item.uploaded_at)),
    };

    await addDoc(collection(db, "products"), productData);

    console.log(`Uploaded product: ${item.product_name}`);
  }

  console.log("🎉 DONE uploading all products!");
}

uploadProducts().catch(console.error);
