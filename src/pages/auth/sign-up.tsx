import { Label } from '@radix-ui/react-label'
import { useMutation } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { resgisterRestaurant } from '@/api/resgister-restaurant'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const singUpForm = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email(),
})

type SingUpForm = z.infer<typeof singUpForm>

export function SingUp() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SingUpForm>()

  const { mutateAsync: registerRestaurantFn } = useMutation({
    mutationFn: resgisterRestaurant,
  })

  async function handleSingUp({
    email,
    managerName,
    restaurantName,
    phone,
  }: SingUpForm) {
    try {
      await registerRestaurantFn({ email, managerName, restaurantName, phone })

      toast.success('restaurante castrado com sucesso!', {
        action: {
          label: 'Login',
          onClick: () => navigate(`/sign-in?email=${email}`),
        },
      })
    } catch {
      toast.error('Erro ao cadastrar restaurante')
    }
  }

  return (
    <>
      <Helmet title="Cadastro" />
      <div className="p-8">
        <Button variant="ghost" asChild className="absolute right-8 top-8">
          <Link to="/sign-in">Novo estabelecimento</Link>
        </Button>

        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Criar conta grátis
            </h1>
            <p className="text-sm text-muted-foreground">
              Seja um parceiro e começe suas vendas !
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(handleSingUp)}>
            <div className="space-y-2">
              <Label htmlFor="restaurant">Nome do estabelecimento</Label>
              <Input
                id="restaurant"
                type="text"
                {...register('restaurantName')}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="manager">Seu nome</Label>
              <Input id="manager" type="text" {...register('managerName')} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Seu celular</Label>
              <Input id="phone" type="text" {...register('phone')} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register('email')} />
            </div>

            <Button disabled={isSubmitting} className="w-full" type="submit">
              Finalizar cadastro
            </Button>

            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              Ao continuar você concorda com nossos{' '}
              <a className="underline underline-offset-2" href="">
                termos de serviço
              </a>{' '}
              e{' '}
              <a className="underline underline-offset-2" href="">
                políticas de privacidade
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
