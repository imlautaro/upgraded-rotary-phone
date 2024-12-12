import { useState } from "react"
import NoteInput from "./components/NoteInput"
import Note from "./components/Note"

export function App () {
    const [notes, setNotes] = useState<string[]>([])

    function handleEnter(value: string) {
        setNotes([...notes, value])
    }

    return (
        <div className="container mx-auto py-24 flex flex-col gap-12">
            <h1 className="text-4xl font-bold">My App</h1>
            <div className="grid grid-cols-4 gap-6">
                <NoteInput onEnter={handleEnter} />
                {notes.map((note, index) => <Note key={index}>{note}</Note>)}
            </div>
        </div>
    )
}
