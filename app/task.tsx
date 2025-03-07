interface ITaskProps {
    id: string,
    title: string,
    description: string,
    status: string,
    updatedAt: Date,
    createdAt: Date,
}

export default function Task(props: ITaskProps) {
    return (
        <div className="task-card">
            <button id="edit-task" onClick={() => console.log('edit')}>Edit</button>
            <button id="delete-task" onClick={() => console.log('delete')}>Delete</button>
            <div className="task-card-title">{props.title}</div>
            <div className="task-card-description">{props.description}</div>
            <span className="task-card-status">{props.status}</span>
            <span className="task-card-date-created">{props.createdAt.toDateString()}</span>
            <span className="task-card-date-updated">{props.updatedAt.toDateString()}</span>
        </div>
    )
}