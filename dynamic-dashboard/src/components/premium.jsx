export default function Member() {
  let isPremium = true;

  return (
    <h1>
      {isPremium
        ? "Thank you for being a premium member!"
        : "Upgrade to premium to enjoy exclusive features!"}
    </h1>
  );
}