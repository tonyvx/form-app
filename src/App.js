import styled from '@emotion/styled';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import TimePicker from '@mui/lab/TimePicker';
import { AppBar, Button, Container, FormControl, FormControlLabel, Grid, Radio, RadioGroup, TextField, Toolbar, Typography } from '@mui/material';
import React from "react";
import SignaturePad from 'react-signature-pad-wrapper';
import { ShowForm } from './ShowForm';

const SpacedTextField = styled(TextField)`
    margin: 8px;
  `;

const SpacedFormControl = styled(FormControl)`
    margin: 8px;
  `;

const LabelTypography = styled(Typography)`
    padding-top: 16px;
  `;

const App = () => {


  const [signPad, setSignPad] = React.useState({});
  const [formData, setFormData] = React.useState({ date: new Date(), start: new Date(), end: new Date() });
  const [open, setOpen] = React.useState(false);
  const saveData = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log("saveData", formData);
  }

  return (

    <Container maxWidth="lg" >
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" align="center">
              Facility Use Agreement
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container>
          <Grid item xs={3}  >
            <LabelTypography variant="overline" id="lessor">Lessor Name</LabelTypography>
          </Grid>
          <Grid item xs={8}>
            <SpacedTextField name="lessor" label="Lessor Name" size="small" onChange={saveData} />
          </Grid>
          <Grid item xs={1} />


          <Grid item xs={3}  >
            <LabelTypography variant="overline" align="left">Purpose</LabelTypography>
          </Grid>
          <Grid item xs={8}>
            <SpacedTextField name="purpose" label="Purpose" size="small" onChange={saveData} />
          </Grid>
          <Grid item xs={1} />

          <Grid item xs={3}  >
            <LabelTypography variant="overline" align="left" style={{ height: "100%" }}>Parishioner</LabelTypography>
          </Grid>
          <Grid item xs={8}>
            <SpacedFormControl component="fieldset" >
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
            </SpacedFormControl>
          </Grid>
          <Grid item xs={1} />

          <Grid item xs={3}  >
            <LabelTypography variant="overline" align="left">Date</LabelTypography>
          </Grid>
          <Grid item xs={3}>
            <MobileDatePicker
              name="date"
              label="Date"
              inputFormat="MM/dd/yyyy"
              value={formData.date}
              onChange={(value) => saveData({ target: { name: "date", value: value } })}
              renderInput={(params) => <SpacedTextField {...params} />}
            />

          </Grid>
          <Grid item xs={3}>
            <TimePicker
              label="Start Time"
              name="start"
              value={formData.start}
              onChange={(value) => saveData({ target: { name: "start", value: value } })}
              renderInput={(params) => <SpacedTextField {...params} />}
            />
          </Grid>
          <Grid item xs={3}>
            <TimePicker
              label="Start End"
              name="end"
              value={formData.end}
              onChange={(value) => saveData({ target: { name: "end", value: value } })}
              renderInput={(params) => <SpacedTextField {...params} />}
            />
          </Grid>

          <Grid item xs={3}  >
            <LabelTypography variant="overline" align="left">Signature</LabelTypography>
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
            <Button name="sign" onClick={() => { saveData({ target: { name: "sign", value: null } }); signPad.clear(); }} >
              <Typography variant="button">Clear Signature</Typography>
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
      </LocalizationProvider>
    </Container >

  );
}
export default App;


