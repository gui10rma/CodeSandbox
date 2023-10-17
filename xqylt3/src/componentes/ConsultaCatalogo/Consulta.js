import axios from "axios";

const API_URL = "http://localhost:8080";

const fetchData = async (): AxiosPromise<Empresa> => {
  const response = axios.get(API_URL + "/ConsultaEmpresa");
  return response;
};
export function ConsultaEmpresa() {
  const query = useQuery({});
}
