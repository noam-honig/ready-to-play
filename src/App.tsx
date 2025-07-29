import { useEffect, useState } from 'react'
import { repo } from 'remult'
import { Task } from './shared/model'

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    repo(Task)
      .find({
        limit: 20,
        orderBy: { createdAt: 'asc' },
        //where: { completed: true },
      })
      .then(setTasks)
  }, [])
  return (
    <div>
      <h1>Todos</h1>
      <main>
        {tasks.map((task) => {
          return (
            <div key={task.id}>
              <input
                id={task.id}
                type="checkbox"
                checked={task.completed}
                onChange={async () => {
                  const updatedTask = await repo(Task).save({
                    ...task,
                    completed: !task.completed,
                  })
                  setTasks(
                    tasks.map((t) =>
                      t.id === updatedTask.id ? updatedTask : t
                    )
                  )
                }}
              />
              <label htmlFor={task.id}>{task.title}</label>
            </div>
          )
        })}
      </main>
    </div>
  )
}
