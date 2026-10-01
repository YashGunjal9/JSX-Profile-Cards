const ProfileCard = (props) => {
  return (
    <div
      style={{
        padding: "2rem",
        fontFamily: "Arial",
        border: "1px solid #ccc",
        borderRadius: "10px",
        flex: "1",
        minWidth: "0",
        boxSizing: "border-box",
      }}
    >
      <h1>Welcome to {props.name}'s profile</h1>

      <img
        src={props.image}
        alt={`${props.name}'s Profile`}
        style={{
          width: "150px",
          height: "150px",
          objectFit: "cover",
          borderRadius: "50%",
          marginBottom: "10px",
        }}
      />

      <p>
        <strong>Favorite Programming Language:</strong>{" "}
        {props.language}
      </p>

      <p>
        <strong>Bio:</strong> {props.bio}
      </p>

      <h2>Hobbies</h2>

      <ul>
        <li>{props.hobby}</li>
      </ul>
    </div>
  );
};

export default ProfileCard;