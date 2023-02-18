import styles from "./NewNote.css";

function NewNote() {
  return (
    <form method="post" id="note-form">
      <p>
        <label htmlFor="title">title</label>
        <input type="text" id="title" name="title" required />
      </p>

      <p>
        <label htmlFor="content">Content</label>
        <textarea name="content" id="" rows={5} required />
      </p>

      <div className="form-actions">
        <button>Add Note</button>
      </div>
    </form>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export { NewNote };
