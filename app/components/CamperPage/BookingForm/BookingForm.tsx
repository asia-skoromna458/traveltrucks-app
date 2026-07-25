export default function BookingForm() {
  return (
    <>
      <h2>Book your campervan now</h2>
      <p>Stay connected! We are always ready to help you.</p>
      <input name="name" type="name" required />
      <input name="mail" type="email" required />
      <button>Send</button>
    </>
  );
}
