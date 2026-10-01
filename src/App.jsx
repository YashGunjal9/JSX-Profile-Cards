import ProfileCard from "./Components/ProfileCard.jsx";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "20px",
        padding: "20px",
        alignItems: "flex-start",
      }}
    >
      <ProfileCard
        name="Yash"
        language="JavaScript"
        image="/Profile Image.jpeg"
        bio="I am a passionate web developer who loves creating interactive and user-friendly web applications."
        hobby="Hiking, reading, and exploring new technologies."
      />

      <ProfileCard
        name="Nakul"
        language="Python"
        image="/Profile images 1.jpg"
        bio="I am a software developer interested in backend development and automation."
        hobby="Gaming, coding, and photography."
      />

      <ProfileCard
        name="Rohit"
        language="Java"
        image="/Profile images 2.jpg"
        bio="I enjoy building useful applications and learning new programming concepts."
        hobby="Cricket, music, and travelling."
      />
    </div>
  );
}

export default App;