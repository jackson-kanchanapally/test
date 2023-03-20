export default function Foot(){
    const da=[
        {
            id:1,
            name:'john',
            age:8,
        },
        {id:2,
            name:'jacks',
            age:20,
        },
        {id:1,
            name:'luffy',
            age:20,
        },
        {id:4,
            name:'kalki',
            age:20,
        },

    ]
    return (
        <footer>
            hello from footer
            {da.map((e)=>(
                <div key={da.id}>
                <h3>{e.name}</h3>
                <p>{e.age}</p>
                </div>
            ))}
        </footer>
    )
}