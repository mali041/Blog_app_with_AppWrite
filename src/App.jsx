import "./App.css";
import conf from "./conf";

function App() {
  console.log(conf.appwriteBucketId);
  console.log(conf.appwriteCollectionId);
  console.log(conf.appwriteDatabaseId);
  console.log(conf.appwriteProjectId);

  return (
    <>
      <h1> Blog App with Appwrite</h1>
    </>
  );
}

export default App;
