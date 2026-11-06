// Isi konfigurasi dari Firebase Console > Project settings > Your apps.
// Jangan pernah memasukkan service account/private key di file frontend.
export const firebaseConfig = {
  apiKey: "ISI_API_KEY",
  authDomain: "PROJECT_ID.firebaseapp.com",
  projectId: "PROJECT_ID",
  storageBucket: "PROJECT_ID.appspot.com",
  messagingSenderId: "ISI_MESSAGING_SENDER_ID",
  appId: "ISI_APP_ID"
};
export const firebaseEnabled = !Object.values(firebaseConfig).some(v => String(v).startsWith("ISI_") || String(v).includes("PROJECT_ID"));
