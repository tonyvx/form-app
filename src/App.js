import { AppBar, Button, Container, FormControl, FormControlLabel, Grid, Radio, RadioGroup, TextField, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SignaturePad from 'react-signature-pad-wrapper';
import React from "react";
import { ShowForm } from './ShowForm';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },

    '& .MuiFormControl-root': {
      margin: theme.spacing(1),
    },
  },
  label: {
    paddingTop: theme.spacing(2),
  },
  title: {}
}));
const App = () => {
  const classes = useStyles();

  const [signPad, setSignPad] = React.useState({});
  const [formData, setFormData] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const saveData = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log("saveData", formData);
  }

  return (

    <Container maxWidth="lg" className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title} align="center">
            Facility Use Agreement
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container>
        <Grid item xs={3} className={classes.label} >
          <Typography variant="overline" id="lessor">Lessor Name</Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField name="lessor" label="Lessor Name" size="small" onChange={saveData} />
        </Grid>
        <Grid item xs={1} />


        <Grid item xs={3} className={classes.label} >
          <Typography variant="overline" align="left">Purpose</Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField name="purpose" label="Purpose" size="small" onChange={saveData} />
        </Grid>
        <Grid item xs={1} />

        <Grid item xs={3} className={classes.label} >
          <Typography variant="overline" align="left" style={{ height: "100%" }}>Parishioner</Typography>
        </Grid>
        <Grid item xs={8}>
          <FormControl component="fieldset" >
            <RadioGroup row aria-label="position" name="parishioner" defaultValue="yes" size="small">
              <FormControlLabel
                value="yes"
                control={<Radio color="primary" size="small" />}
                label="Yes"
                labelPlacement="top"
                size="small"
                onChange={saveData}
              />
              <FormControlLabel
                value="no"
                control={<Radio color="primary" size="small" />}
                label="No"
                labelPlacement="top"
                onChange={saveData}
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={1} />

        <Grid item xs={3} className={classes.label} >
          <Typography variant="overline" align="left">Date requested</Typography>
        </Grid>
        <Grid item xs={9}>
          <TextField name="date" id="standard-basic" size="small" type="date" onChange={saveData} />
        </Grid>
        <Grid item xs={0} />

        <Grid item xs={3} className={classes.label} >
          <Typography variant="overline" align="left">Time</Typography>
        </Grid>
        <Grid item xs={9}>
          <Grid container>
            <Grid item xs={6}>
              <TextField name="start" id="standard-basic" size="small" type="time" onChange={saveData} />
            </Grid>
            <Grid item xs={6}>
              <TextField name="end" id="standard-basic" size="small" type="time" onChange={saveData} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={0} />

        <Grid item xs={3} className={classes.label} >
          <Typography variant="overline" align="left">Signature</Typography>
        </Grid>
        <Grid item xs={8} style={{ background: "aliceblue" }} >
          <SignaturePad ref={(ref) => setSignPad(ref)} />
        </Grid>

        <Grid item xs={1} ></Grid>

        <Grid item xs={3} />
        <Grid item xs={8} align="center">
          <Button name="sign" onClick={() => saveData({ target: { name: "sign", value: signPad.canvas.toDataURL() } })} >
            <Typography variant="button">Accept Signature</Typography>
          </Button>
        </Grid>
        <Grid item xs={1}></Grid>

        <Grid item xs={12} align="center">
          <Button name="submit" onClick={() => { console.log("submit", { ...formData, duration: (new Date(formData.date + " " + formData.end) - new Date(formData.date + " " + formData.start)) / 3600000 }); setOpen(true) }} > <Typography variant="button">Submit</Typography></Button>
        </Grid>

        <Grid item xs={12}>
          <ShowForm formData={formData} open={open} setOpen={setOpen} />
        </Grid>
      </Grid>
    </Container >
  );
}
export default App;