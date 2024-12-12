import { NoteBase } from "./NoteBase";

export default function Note(props: { children: React.ReactNode }){
    return (
        <NoteBase>
            { props.children }
        </NoteBase>
    )
}