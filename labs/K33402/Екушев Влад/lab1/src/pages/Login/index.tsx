import { styled } from '@mui/material'
import React from 'react'
import { AppBar } from 'src/components/AppBar'
import Input from 'src/components/Input'
import DoorEnterIllustration from 'src/components/svg/DoorEnterIllustration'
import { BUTTON_MAX_WIDTH } from 'src/config/constants'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { getRouteByAlias } from 'src/utils/getRoutePath'
import Button from 'src/components/Button'
import { useLoginMutation } from 'src/api'
import { useAppDispatch } from 'src/store'
import { setUser, setUserFetchingState } from 'src/store/auth'
import { FetchingState } from 'src/types/FetchingState'

const Root = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(1),
  padding: theme.spacing(2),
  height: '100%',
}))

const Form = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(1),
  width: '100%',
  flex: '1 0',
}))

const Illustration = styled(DoorEnterIllustration)({
  width: '100%',
  height: 'auto',
  maxWidth: BUTTON_MAX_WIDTH,
})

const FillContainer = styled('div')(({ theme }) => ({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: theme.spacing(1),
  alignItems: 'center',
}))

const Login: React.FC = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<{ email: string; password: string }>()
  const [login] = useLoginMutation()
  const dispatch = useAppDispatch()

  const onSubmit = () => {
    const { email, password } = getValues()
    const reject = () => {
      dispatch(setUser(null))
      dispatch(setUserFetchingState(FetchingState.REJECTED))
    }

    dispatch(setUserFetchingState(FetchingState.PENDING))

    console.log('Entered credentials:', email, password)

    login({
      email,
      password,
    })
      .unwrap()
      .then((data) => {
        if (!data.success) {
          return reject()
        }

        dispatch(setUser(data.user))
        dispatch(setUserFetchingState(FetchingState.FULFILLED))
        navigate(getRouteByAlias('favorites').path)
      })
      .catch(() => {
        return reject()
      })
  }

  const handleGoToRegisterClick = () => {
    navigate(getRouteByAlias('register').path)
  }

  return (
    <>
      <AppBar header="Вход в аккаунт" />
      <Root>
        <Illustration />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FillContainer>
            <Input
              placeholder="Электронная почта"
              error={!!errors.email}
              type="email"
              fullWidth
              {...register('email', {
                required: true,
              })}
            />
            <Input
              placeholder="Пароль"
              error={!!errors.password}
              type="password"
              fullWidth
              {...register('password', {
                required: true,
              })}
            />
          </FillContainer>
          <Button type="submit">Войти</Button>
        </Form>
        <Button onClick={handleGoToRegisterClick} variant="default">
          Зарегестрироваться
        </Button>
      </Root>
    </>
  )
}

export default Login
