// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import '@testing-library/jest-dom';
import { RenderResult, render } from '@testing-library/react';
import { IServicesStatus } from '../hooks';
import { CardStatus } from './card-status';


export const mockServiceStatus = {
  apiName: "mockServiceStatus",
  hostname: "hostname",
  message: "Service status",
  status: 200,
  success: true,
  timeo: 100
}
// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
const mockServiceStatusEmpty = {

} as IServicesStatus

interface ISutTypes {
  sut: RenderResult;
}

interface IMakeSutProps {
  isRefetching: boolean
  serviceStatus: IServicesStatus
}

const makeSut = ({ ...props }: IMakeSutProps): ISutTypes => {
  const sut = render(
    <CardStatus
      {...props}
    />
  )

  return { sut }
}
describe("CardStatus", () => {
  it("Should be able to render component when all props are set", () => {
    const { sut } = makeSut({ isRefetching: false, serviceStatus: mockServiceStatus })
    expect(sut).toBeTruthy()
  })

  it("Should not be able to render component when props are not set", async () => {
    const { sut } = makeSut({ isRefetching: false, serviceStatus: mockServiceStatusEmpty })
    expect(sut.queryByTestId("card-status-id")).toBeNull()
  })

  it("Should be able to render refetching when isRefetching is true", async () => {
    const { sut } = makeSut({ isRefetching: true, serviceStatus: mockServiceStatus })
    const refetchingComponent = await sut.findByTestId("refetching-id")
    expect(refetchingComponent).toBeTruthy()
  })
})