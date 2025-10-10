
jest.mock('../../services/tasks.service.js',()=>({
    
    allTasks: jest.fn(), 
    specificTask: jest.fn(), 
    addTask: jest.fn(), 
    removeTask: jest.fn(), 
    manipulateTask: jest.fn(), 
    changeCompletion: jest.fn() 
    
}))

const next = jest.fn();

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.send = jest.fn().mockReturnValue(res);
  return res;
};



const {getTasks,getTaskById, editTask, deleteTask, createTask, editTaskCompletion } = require('../../controllers/task.controller')
const { allTasks, specificTask, addTask, removeTask, manipulateTask, changeCompletion } = require("../../services/tasks.service")
const mockdata = require('./mockdata')

const mockSample = mockdata[0]
const {title,description,due_date,priority} = mockSample
const mock = {title,description,due_date,priority}

describe('All Controllers',()=>{
            

    describe('getting all tasks',()=>{
        it('should return 200',async()=>{
            const res = mockResponse()
            const req = { query: {} }

            allTasks.mockResolvedValue(mockdata)
            await getTasks(req,res,next)

              expect(allTasks).toHaveBeenCalledWith({
                title: undefined,
                description: undefined,
                priority: undefined,
                completion_status: undefined,
                due_date: undefined,
                limit: 10,
                order: 'ASC'
              });
            expect(res.status).toHaveBeenCalledWith(200)
            expect(res.send).toHaveBeenCalledWith(mockdata)
        })

        it('should return 204 for empty listing',async()=>{
            const req = { query: {} }
            const res = mockResponse()

            allTasks.mockResolvedValue(null);
            await getTasks(req,res,next)

            expect(res.status).toHaveBeenCalledWith(204)
            expect(res.send).toHaveBeenCalledWith('No task found')
        })

      
        it('should return error',async()=>{
            const res = mockResponse()
            const req = {query: {}}

            allTasks.mockRejectedValue(new Error('failed'))
            await getTasks(req,res,next)

            expect(next).toHaveBeenCalled()

        })
    })

    describe('specific tasks test',()=>{
        it('should return 200',async()=>{
            const res = mockResponse()
            const req = {params :{id:3}}

            specificTask.mockResolvedValue(mockSample)
            await getTaskById(req,res,next)

            expect(res.status).toHaveBeenCalledWith(200)
            expect(res.send).toHaveBeenCalledWith(mockSample)
        })

          it('should return 404 wrong search',async()=>{
            const req = { params: {id:123} }
            const res = mockResponse()

            specificTask.mockResolvedValue(null);
            await getTaskById(req,res,next)

            expect(res.status).toHaveBeenCalledWith(404)
            expect(res.send).toHaveBeenCalledWith('Task does not exist')
        })

    })

    describe('create task',()=>{
        it('should successfully create todo',async()=>{
            const res = mockResponse()
            const req = {body :mock}

            addTask.mockResolvedValue(mockSample)
            await createTask(req,res,next)

            expect(res.status).toHaveBeenCalledWith(201)
            expect(res.send).toHaveBeenCalledWith(mockSample)

        })
        it('should fail to create task',async()=>{
        const res = mockResponse()
        const req = {body :{due_date:''}}

        addTask.mockRejectedValue(new Error('failed'))
        await createTask(req,res,next)

        expect(next).toHaveBeenCalled();
        })
    })
    describe('edit tasks details',()=>{
        it("should successfully edit the task",async()=>{
            const res = mockResponse()
            const req = {params :{id:3},
                        body: {...mock,completion_status:true} }

            manipulateTask.mockResolvedValue(mockSample)
            await editTask(req,res,next)

            expect(manipulateTask).toHaveBeenCalledWith({
                    formated_id: 3,
                    title: "tasking",
                    description: "hello",
                    formattedDate: "2026-10-01T12:00:00.000Z",
                    priority: "low",
                    completion_status: true
                })

            //  expect(res.send).toHaveBeenCalledWith(mockSample)
            //  expect(res.status).toHaveBeenCalledWith(200)


        })
        it("should fail in editing task(404 error)",async()=>{
        const res = mockResponse()
        const req = {body :{}}

        manipulateTask.mockResolvedValue(null)
        await editTask(req,res,next)

        
        expect(res.status).toHaveBeenCalledWith(404)
        expect(res.send).toHaveBeenCalledWith('Task does not exist')

        })

        
        it('task edit crash',async()=>{
        const res = mockResponse()
        const req = {body :{}}

         manipulateTask.mockRejectedValue(new Error('failed'))
        await editTask(req,res,next)

        expect(next).toHaveBeenCalled()

        })
    })

    describe('change task status',()=>{
        it('should return a change success',async()=>{
        const res = mockResponse()
        const req = {params :{id:3},body:{completion_status:true}}

        changeCompletion.mockResolvedValue(mockSample)
        await editTaskCompletion(req,res,next)

        expect(res.send).toHaveBeenCalledWith(mockSample)
        })

        it('should fail to change status task(404 error)',async()=>{
        const res = mockResponse()
        const req = {params :{id:123},body:{completion_status:true}}

        changeCompletion.mockResolvedValue(null)
        await editTaskCompletion(req,res,next)

        expect(res.status).toHaveBeenCalledWith(404)
        expect(res.send).toHaveBeenCalledWith('Task does not exist')

        })

        
        it('task status change crash',async()=>{
        const res = mockResponse()
        const req = {body :{}}

        changeCompletion.mockRejectedValue(new Error('failed'))
        await editTaskCompletion(req,res,next)

        expect(next).toHaveBeenCalled()

        })


    })

    describe('delete task',()=>{
        it('should successfully delete  task',async()=>{
        const res = mockResponse()
            const req = {params :{id:3}}

            removeTask.mockResolvedValue(mockSample)
            await deleteTask(req,res,next)

            expect(res.status).toHaveBeenCalledWith(204)
            expect(res.send).toHaveBeenCalledWith(mockSample)

        })
        it('should fail to delete task(404 error)',async()=>{
        const res = mockResponse()
        const req = {params :{id:123}}

        removeTask.mockResolvedValue(null)
        await deleteTask(req,res,next)

        expect(res.status).toHaveBeenCalledWith(404)
        expect(res.send).toHaveBeenCalledWith('Task does not exist')

        })
        it('task deletion crash',async()=>{
        const res = mockResponse()
        const req = {body :{}}

        removeTask.mockRejectedValue(new Error('failed'))
        await deleteTask(req,res,next)

        expect(next).toHaveBeenCalled()

        })
        
    })
})