const database = require('./db')
const createProffy = require('./createProffy')

database.then(async (db) => {
    proffyValue = {
        name: "Ricardo Pessoa",
        avatar: "https://avatars3.githubusercontent.com/u/28159522?s=400&u=745d06764bd3d562470b15f27c107b4dfdc242f3&v=4",
        whatsapp: "+55 13 991077887",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    }

    classValue = {
        subject: 1,
        cost: "20",
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1120,    
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220,  
        }
    ]

    //  await createProffy(db, {proffyValue, classValue, classScheduleValues })

    const selectedProffys = await db.all("SELECT * FROM proffys")

    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.* 
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1
    `)

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.* 
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = "0" 
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"
    `)

    console.log(selectClassesSchedules)
})