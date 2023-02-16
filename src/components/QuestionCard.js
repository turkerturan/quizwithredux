import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AnswersButton from './AnswersButton';

export default function QuestionCard({ item }) {


    return (
        <Card sx={{ display: 'block', maxWidth: 800, marginLeft: 'auto', marginRight: 'auto', marginTop: 2 }}>
            <CardContent>
                <Typography sx={{ fontSize: 20 }} color="black" gutterBottom>
                    {item.question}
                </Typography>
            </CardContent>
            <CardActions>
                <AnswersButton key={item.id} item={item} />
            </CardActions>
        </Card>
    );
}