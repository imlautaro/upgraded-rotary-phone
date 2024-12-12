import { useState } from "react";
import { NoteBase } from "./NoteBase";

export default function NoteInput(props: { onEnter: (value: string) => void }) {
    const [value, setValue] = useState('')

    function handleEnter(event: React.KeyboardEvent) {
        if (event.key === 'Enter') {
            props.onEnter(value)
        }
    }

    function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setValue(event.target.value)
    }

    return (
        <NoteBase>
            <textarea
                onKeyDown={handleEnter}
                value={value}
                onChange={handleChange}
            />
        </NoteBase>
    )
}