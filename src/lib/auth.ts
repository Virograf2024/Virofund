import { db } from "./firebase";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";

async function addUser({
  name,
  email,
  phone,
}: {
  name: string;
  email: string;
  phone: string;
}) {
  try {
    const usersRef = collection(db, "wait list");

    // 🔍 Check if email already exists
    const q = query(usersRef, where("email", "==", email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      console.warn("User with this email already exists.");
      return { success: false, message: "Email already registered" };
    }

    // ✅ Add new user if not found
    const docRef = await addDoc(usersRef, {
      name,
      email,
      phone,
      createdAt: new Date(),
    });

    console.log("Document written with ID: ", docRef.id);
    return { success: true, id: docRef.id };
  } catch (e) {
    console.error("Error adding document: ", e);
    return { success: false, message: "Error adding user" };
  }
}
export async function fetchWaitlist() {
  const querySnapshot = await getDocs(collection(db, "wait list"));
  const results = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return results as {
    id: string;
    name: string;
    email: string;
    phone: string;
  }[];
}
export { addUser };
