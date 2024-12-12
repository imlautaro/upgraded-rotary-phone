export function NoteBase(props: { children: React.ReactNode }) {
    return (
        <div className="bg-yellow-100 rounded p-6 shadow">
            { props.children }
        </div>
    )
}