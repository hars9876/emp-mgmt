import { create } from 'zustand'



export const useEmpDataStore = create((set) => ({
    empData: [],
    cache: new Map(),
    add: (obj) => set((state) => {
        var id = "id" + Math.random().toString(16).slice(2)
        obj = {...obj,id:id}
        let arr = [...state.empData]
        arr.push(obj)
        console.log("store",arr)
       return { empData: [...arr] }
    
    }),
    delete:(id)=>set((state)=>{
        let arr = [...state.empData];
        let filterData = arr.filter((val)=>{
            return val.id != id
        })
        return {empData: [...filterData]}

    }),
    edit:(obj)=>set((state)=>{
        let arr = [...state.empData];
        let mapData = arr.map((val)=>{
            if(val.id == obj.id){
                val.name = obj.employee_name
                val.salary = obj.employee_salary
                val.age = obj.employee_age
                val.profile_image = obj.profile_image
            }
            return val
        })
        return {empData: [...mapData]}

    }),
    fetchDataWithCache: async (endpoint) => {
        if (useEmpDataStore.getState().cache.has(endpoint)) {
          return useEmpDataStore.getState().cache.get(endpoint);
        } else {
          try {
            const response = await fetch(endpoint);
            const data = await response.json();
            console.log("storedata",data)
            set((state) => ({
              cache: new Map(state.cache).set(endpoint, data.data),
            }));
    
            return data.data;
          } catch (error) {
            console.error('API request failed:', error);
            throw error;
          }
        }
      },
    setstate: (arr) => set((state) => {
      state.cache = [...arr]
       return { empData: [...arr] }
    
    }),
}));

