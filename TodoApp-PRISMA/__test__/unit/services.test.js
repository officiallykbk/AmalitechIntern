const mockData = require('./mockdata')

//TODO: ADD FAILURE PATH

jest.mock('../../config/db', () => ({
    prisma:{
        tasks:{
            findMany: jest.fn(),
            findUnique: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
            delete: jest.fn()
        }
    }
}))
const {prisma} = require('../../config/db')
const { allTasks, specificTask, addTask, removeTask, manipulateTask, changeCompletion } = require("../../services/tasks.service")

const mockSample = mockData[0]

describe('All Services',() => {
  
    describe ('Getting all todos ', () => {
        it('should return all tasks', async () => {
            prisma.tasks.findMany.mockResolvedValue(mockData)
            const result = await allTasks({id:undefined,title:undefined,description:undefined,due_date:undefined,priority:undefined,completion_status:undefined})
            // truthy
            expect(result).toContainEqual(mockSample)
            expect(prisma.tasks.findMany).toHaveBeenCalled()
            // falsy
            expect(result).not.toContainEqual({
                                    "id": 123,
                                    "title": "tasking",
                                    "description": "hello",
                                    "due_date": "2026-10-01T12:00:00.000Z",
                                    "priority": "low",
                                    "completion_status": false
                                })
        })
        // it('should return filtered todos based on querys',async() =>{
        //     prisma.tasks.findMany.mockResolvedValue(
    //    mockSample)
        //     const result = await allTasks()
        // })
        it('should return an empty array',async()=>{
            prisma.tasks.findMany.mockResolvedValue([])
            const result = await allTasks()
            expect(result).toEqual([])
            expect(prisma.tasks.findMany).toHaveBeenCalled()

        })
    })

    describe('Get todo by Id',() => {
        it('should return item with such id', async()=>{
            prisma.tasks.findUnique.mockResolvedValue(mockSample)
            const result = await specificTask(3)
            expect(result).toEqual(mockSample)
            expect(prisma.tasks.findUnique).toHaveBeenCalledWith({where:{id:3}})
            
        })
        
    })

    describe ('add tasks',()=>{
        const MockTodo = {
                             "id": 20,
                             "title": "tasking",
                             "description": "hello",
                             "due_date": "2026-10-01T12:00:00.000Z",
                             "priority": "low",
                             "completion_status": false
                         }

        const MockOff = {
                             "id": 20,
                             "title": "tasking",
                             "description": "hello",
                             "due_date": "2002-10-01T12:00:00.000Z",
                             "priority": "low",
                             "completion_status": false
                         }
        it('add a new task to todos',async()=>{
            prisma.tasks.create.mockResolvedValue(MockTodo)
            const result = await addTask(MockTodo)
            expect(result).toEqual(MockTodo)
            // expect(prisma.tasks.create).toHaveBeenCalledWith({
            //      data: {
            //      "title": "tasking",
            //      "description": "hello",
            //      "due_date": "2026-10-01T12:00:00.000Z",
            //      "priority": "low",
            // }})
        })
        // it('should throw an error when date is wrong',async()=>{
        //     prisma.tasks.create.mockRejectedValue(new Error("due_dates must be today or later"))
        //     const result = await addTask(MockOff)
        //     expect(result).rejects.toThrow("due_dates must be today or later")
        // })

    })
    describe ('change entire task details',()=>{
        it('should change status only',async()=>{
            prisma.tasks.update.mockResolvedValue(mockSample)
            const result = await manipulateTask(mockSample)
            expect(result).toEqual(mockSample)
            expect(prisma.tasks.update).toHaveBeenCalledTimes(1)
            expect(prisma.tasks.update).toHaveBeenCalledWith({
                where: { id: 3 },
                data:  {
                      title: mockSample.title,
                      description: mockSample.description,
                      due_date: mockSample.due_date,
                      priority: mockSample.priority,
                      completion_status: mockSample.completion_status
                    }
              })
        })

    })

    describe ('change task completion status',()=>{
        it('should change status only',async()=>{
            prisma.tasks.update.mockResolvedValue(mockSample)
            const result = await changeCompletion({id:3,completion_status:true})
            expect(result).toEqual(mockSample)
            expect(prisma.tasks.update).toHaveBeenCalledTimes(1)
            expect(prisma.tasks.update).toHaveBeenCalledWith({
                where: { id: 3 },
                data: { completion_status: true }
              })
            
            // todo: calling with data instead of times
        })
    })

    describe ('delete task',()=>{
        it('should remove task',async()=>{
            prisma.tasks.delete.mockResolvedValue(mockSample)
            const result = await removeTask(3)
            expect(result).toBe(mockSample)
            expect(prisma.tasks.delete).toHaveBeenCalledWith({where: {id:3}})
        })
        // it('should reject task removal',()=>{})

    })

})