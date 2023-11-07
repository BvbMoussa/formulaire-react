import Form from "./components/Form";

function App() {
  return (
    <div
      className="w-full min-h-screen md:flex md:items-center md:justify-center bg-blue-200 md:py-[180px]"
      style={{
        background:
          "linear-gradient(0deg, rgb(54, 218, 221) 0%, rgb(12, 33, 87) 86%)",
        backgroundAttachment: "scroll",
      }}
    >
      <Form />
    </div>
  );
}

export default App;
