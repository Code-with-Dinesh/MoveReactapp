import axios from "axios";
const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOGI3YTljZjE0N2NhNDk5Mjg2NWNhZDE1M2NkNTJkOCIsIm5iZiI6MTcyMzA5NzU4MS4yMjczOCwic3ViIjoiNjZiNDVkODlmMzJkYzFmZTQ3MzY0OTdmIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.7_OrF64HXR6I1EzB_3aRMhGyloBGXurhretTmqSbs6c'
      }
})

export default instance;