
import { RenderResult, render } from '@testing-library/react';
import { mockServiceStatus } from '../components/card-status.spec';
import { useGetStatusPage } from '../hooks';
import { StatusServicesPage } from "./status-services-page";

jest.mock("../hooks")

interface ISutTypes {
  sut: RenderResult;
}

const makeSut = (): ISutTypes => {
  const sut = render(
    <StatusServicesPage />
  )

  return { sut }
}
describe("StatusServicesPage", () => {
  it("Should be render the loading when data is beeing loaded", async () => {
    (useGetStatusPage as jest.Mock).mockReturnValue({
      servicesStatus: [], isLoading: true, isRefetching: false
    })
    const { sut } = makeSut()

    const loadingComponent = await sut.findByTestId("loading-id")

    expect(loadingComponent).toBeTruthy()
  })

  it("Should be render the result when loading is false", async () => {
    (useGetStatusPage as jest.Mock).mockReturnValue({ servicesStatus: [mockServiceStatus], isLoading: false, isRefetching: false })
    const { sut } = makeSut()
    const component = await sut.findByTestId("container-id")

    expect(component).toBeTruthy()
  })
})