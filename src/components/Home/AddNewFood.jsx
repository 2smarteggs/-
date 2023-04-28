import Container from "@mui/material/Container";
import {Avatar, Grid, Icon, InputLabel, MenuItem, Select, Stack, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import {deepOrange} from "@mui/material/colors";
import {useEffect, useState} from "react";
import {ALGORITHMS} from "../../utils/algorithms";

const chineseCategory = {
    'protein': "蛋白质",
    'carbohydrate': "碳水化物",
    'fat': "脂肪",
    'fiber': "膳食纤维",
    'uncategorized': "未知类别",
}

const AddNewFood = () => {
    const [input, setInput] = useState({
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        fiber: 0,
    });
    const [foodCategory, setFoodCategory] = useState("未知类别");

    const onChange = (e) => {
        e.preventDefault()
        setInput({...input, [e.target.id]: e.target.value})
        setFoodCategory(chineseCategory[ALGORITHMS.GET_FOOD_CATEGORY({...input, [e.target.id]: e.target.value})]);
    }

    return(<>
        <Box sx={{ width: '90%', marginTop: '5%', marginLeft: 'auto', marginRight: 'auto' }}>

            <Stack spacing={2}>
                <Stack direction="row" spacing={2}>
                    <div style={{width: '90%'}}>
                        <TextField id="outlined-basic" label="食物名称" variant="outlined" fullWidth />
                    </div>
                    <div>
                        <Avatar sx={{ bgcolor: deepOrange[500], width: 55, height: 55 }} variant="rounded">{foodCategory}</Avatar>
                    </div>
                </Stack>
                <Stack direction="row" spacing={2}>
                    <TextField id="carbohydrate" onChange={onChange} type={"number"} label="碳水化合物 克/百克" variant="outlined" fullWidth />
                </Stack>
                <Stack direction="row" spacing={2}>
                    <TextField id="protein" onChange={onChange} type={"number"} label="蛋白质 克/百克" variant="outlined" fullWidth />
                </Stack>
                <Stack direction="row" spacing={2}>
                    <TextField id="fat" onChange={onChange} type={"number"} label="脂肪 克/百克" variant="outlined" fullWidth />
                </Stack>
                <Stack direction="row" spacing={2}>
                    <TextField id="fiber" onChange={onChange} type={"number"} label="膳食纤维 克/百克" variant="outlined" fullWidth />
                </Stack>
            </Stack>
        </Box>
    </>)
}

export default AddNewFood;