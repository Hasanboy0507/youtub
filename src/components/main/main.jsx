import { Box, Container, Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { colors } from "../../../constants/colors"
import {Category} from '../'
import { ApiService } from "../../service/api.service"


const Main = () => {
  const [selectCategory, setSelectCategory] = useState('New')
  const selectCategoryHandler = category => setSelectCategory(category)


  useEffect(() => {
    ApiService.fetching('search').then(data => console.log(data)
    )
  }, [])
  
  return (
    <Stack>
      <Category selectCategoryHandler={selectCategoryHandler} selectCategory={selectCategory}/>

      <Box p={2} sx={{height:'90vh'}}>
        <Container maxWidth={'90%'}>
          <Typography variant={'h4'} fontWeight={'bold'} mb={2}>

        {selectCategory} <span style={{color:colors.secondary}}>Videos</span>
          </Typography>
          videos
        </Container>
      </Box>
    </Stack>
  )
}

export default Main