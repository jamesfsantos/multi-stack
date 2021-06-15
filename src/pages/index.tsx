import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment'
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle'
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation'
import TextField from 'ui/components/inputs/TextField/TextField'

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={'Conheça os profissionais'}
        subtitle={'Preencha seu endereço e veja todos os profissionais da sua localidade'}
      />
      <UserInformation
        name={'James Ferreira'}
        picture={'https://github.com/jamesfsantos.png'}
        rating={3}
        description={'São Paulo'}
      />

      <TextField label={'Digite seu CEP'} fullWidth />

    </div>
  )
}
