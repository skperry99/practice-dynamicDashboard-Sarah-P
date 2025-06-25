let username = "Sarah";
let myDate = new Date().toLocaleDateString();

export default function Greeting() {
  return <h1>Welcome, {username}! {myDate}</h1>;
}
