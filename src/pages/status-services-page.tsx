import styled from "styled-components"
import { CardStatus } from "../components"
import { useGetStatusPage } from "../hooks"

export const StatusServicesPage = () => {
  const { servicesStatus, isLoading, isRefetching } = useGetStatusPage()

  if (isLoading) return <Center><p>Loading...</p></Center>

  return (
    <Container>
      {
        servicesStatus.map(service => <CardStatus key={service.apiName}
          serviceStatus={service}
          isRefetching={isRefetching}
        />)
      }
    </Container>
  )
}

const Center = styled.div`
 width: 100%;
 height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: auto 1fr auto;

  padding: 16px;
  gap: 16px;

  margin: 0 auto;
  width: 100%;
  max-width: 960px;
`