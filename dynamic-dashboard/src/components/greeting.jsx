let username = "Marsha Mellow";
let myDate = new Date().toLocaleDateString();

export default function Greeting() {
  return (
    <div>
      <h1>Welcome, {username}!</h1>
      <h2>Today is {myDate}</h2>
    </div>
  );
}
