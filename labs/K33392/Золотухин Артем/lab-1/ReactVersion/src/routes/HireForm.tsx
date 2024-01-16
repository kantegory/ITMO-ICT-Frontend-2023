import React, { FC, useState } from 'react'
import MyNavbar from '../components/MyNavbar'
import './styles/HireForm.css'
import { useNavigate, useParams } from 'react-router'
import { useQuery } from '@tanstack/react-query'
import { Avatar, CircularProgress } from '@mui/material'
import HireModal from './modals/hireModal/hireModal'

type ProjectFormValues = {
  projectName: string
  budget: string
  duration: string
  description: string
}

const HireForm: FC = () => {
  const { userId } = useParams()
  const navigate = useNavigate()

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isFormValid, setIsFormValid] = useState(false)

  const validateForm = (formValues: {
    projectName: string
    budget: string
    duration: string
    description: string
  }) => {
    const isValid =
      formValues.projectName.trim().length > 4 &&
      formValues.budget.trim() !== '' &&
      parseInt(formValues.duration) > 0 &&
      formValues.description.trim().length > 0
    setIsFormValid(isValid)
  }

  const [formValues, setFormValues] = useState<ProjectFormValues>({
    projectName: '',
    budget: '',
    duration: '',
    description: '',
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormValues({
      ...formValues,
      [name]: value,
    })
    validateForm({ ...formValues, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formValues)
  }

  const { data, isLoading, error, isError } = useQuery({
    queryKey: ['userData', { userId: userId }],
    queryFn: () =>
      fetch(`http://localhost:3000/results?id=${userId}`)
        .then((response) => response.json())
        .then((res) => res[0]),
  })

  return (
    <>
      <MyNavbar />
      <div className='hire'>
        {isLoading ? (
          <>
            <h1>Loading...</h1> <CircularProgress />
          </>
        ) : (
          <>
            <Avatar
              src={data.avatar}
              sx={{ width: 120, height: 120 }}
              alt={`${data.first_name} ${data.last_name}`}
            />
            <p>Вы нанимаете {data.first_name}</p>

            <form onSubmit={handleSubmit} className='project-form'>
              <div>
                <label htmlFor='projectName'>Название проекта</label>
                <input
                  type='text'
                  id='projectName'
                  name='projectName'
                  value={formValues.projectName}
                  onChange={handleInputChange}
                  minLength={5}
                  maxLength={255}
                  required
                />
              </div>
              <div>
                <label htmlFor='budget'>Бюджет (руб.)</label>
                <input
                  type='number'
                  id='budget'
                  name='budget'
                  value={formValues.budget}
                  onChange={handleInputChange}
                  min={0}
                  required
                />
              </div>
              <div>
                <label htmlFor='duration'>
                  Срок выполнения (количество дней)
                </label>
                <input
                  type='number'
                  id='duration'
                  name='duration'
                  value={formValues.duration}
                  onChange={handleInputChange}
                  max={365}
                  min={0}
                  required
                />
              </div>
              <div>
                <label htmlFor='description'>Задание</label>
                <textarea
                  id='description'
                  className='project-form__desc'
                  name='description'
                  value={formValues.description}
                  onChange={handleInputChange}
                  maxLength={4096}
                  required
                />
              </div>
              <button
                type='submit'
                onClick={() => {
                  isFormValid ? setIsModalOpen(true) : null
                }}
              >
                Отправить заказ
              </button>
            </form>
          </>
        )}
      </div>
      <HireModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
        }}
        onNavigateBack={() => {
          navigate('/search')
        }}
      >
        <span>
          Запрос успешно отправлен, если вашу задачу примут - мы вам сразу
          сообщим!
        </span>
      </HireModal>
    </>
  )
}

export default HireForm
