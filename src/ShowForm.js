import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Typography } from "@material-ui/core";
import React from "react";
import ReactToPdf from "react-to-pdf";

export const ShowForm = ({ formData, open, setOpen }) => {
    const handleClose = () => setOpen(false);
    return <ReactToPdf >
        {({ toPdf, targetRef }) => (<Dialog ref={targetRef} onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} maxWidth={"lg"} width={1000} height={5000} >
            <DialogTitle id="customized-dialog-title" onClose={handleClose} >
                <Typography align="center"><b>FACILITY USE AGREEMENT</b></Typography>
            </DialogTitle>
            <DialogContent dividers>
                <Typography gutterBottom align="justify">
                    This is an agreement between <b>St.Thomas Syro Malabar Church, Boston</b>  (hereafter referred to as <b>“PARISH”</b>) and <b>{formData.lessor} </b>(hereafter referred to as <b>“FACILITY USER”</b>) for the use of Church basement (hereafter referred to as the “Facility”) located at 41 Brook Street, Framingham, MA - 01701.
                </Typography>

                <Typography>
                    <b>1. TERMS OF AGREEMENT</b>
                </Typography>

                <Typography gutterBottom align="justify">
                    <b>1.1.</b> FOR AND IN CONSIDERATION OF the sum of <b>$0</b>, PARISH agrees to allow the FACILITY USER the use of the Facility for the date(s) of  <b>{formData.date}</b> for the purposes of <b>{formData.purpose}</b> (hereafter referred to as the <b>“Event”</b>).
                </Typography>

                <Typography gutterBottom align="justify">
                    <b>1.2.</b> During the dates of this Event, the FACILITY USER shall have access to the building between the hours of <b>{formData.start}</b> - <b>{formData.end}</b> on <b>{formData.date}</b> set up and take down of decorations within the Facility..
                </Typography>

                <Typography gutterBottom align="justify">
                    <b>1.3.</b> All minors should be properly supervised at all times, to include times when they are outside the Facility and in the restrooms.  The FACILITY USER shall be responsible for any vandalism by participants and/or their children.  The FACILITY USER shall also ensure the protection of minors from sexual misconduct and/or child abuse in order to conform with the requirements adopted by the United States Conference of Catholic Bishops and St Thomas Syro-Malabar Diocese of Chicago Policy on the Protection of Children/Young People and Prevention of Sexual Misconduct and/or Child Abuse.
                </Typography>

                <Typography gutterBottom align="justify">
                    <b>1.4.</b> Any rules for Facility use, whether part of the application for Facility use or contained within a separate document, shall attach to this agreement and become binding upon the FACILITY USER. The FACILITY USER acknowledges that they have reviewed any rules of use for the Facility and agree to abide by said rules.
                </Typography>

                <Typography gutterBottom align="justify">
                    <b>1.5.</b> The FACILITY USER agrees that any violation of the Facility’s rules of use; municipal, state or federal law or; the policies and procedures of the St Thomas Syro-Malabar Diocese of Chicago may lead to the termination of use of the Facility and subject the FACILITY USER to forfeit any monies in deposit as well as claims for damages as determined by PARISH or the St Thomas Syro-Malabar Diocese of Chicago.
                </Typography>

                <Typography gutterBottom align="justify">
                    <b>1.6.</b> The serving of alcoholic beverages during the use of the Facility is not permitted.
                </Typography>

                <Typography gutterBottom align="justify">
                    <b>1.7.</b> It is agreed and understood that PARISH  shall not be deemed liable if the Facility is required to be closed or if for any reason made unavailable for use subsequently resulting in the termination, cancellation or postponement of the Event.  The reasons for such closure may include but are not limited to rescheduling of parish activities, weather, natural or manmade disaster, riot, civil commotion or any acts of civil authorities.
                </Typography>

                <Typography>
                    <b>2. INSURANCE/INDEMNITY REQUIREMENTS</b>
                </Typography>

                <Typography gutterBottom align="justify">
                    <b>2.1.</b> While using this Facility, the FACILITY USER agrees to carry a Commercial General Liability insurance policy with a minimum limit of $1,000,000 per occurrence/aggregate to cover the occurrence of property damage and/or bodily injury arising out of or during the use of Church Sanctorum and the basement. PARISH  provides liability protection only for its employees, officers, and agents when acting within the scope of their employment or agency.
                </Typography>

                <Typography gutterBottom align="justify">
                    <b>2.2.</b> The FACILITY USER agrees to provide a Certificate of Insurance to the PARISH , which provides evidence of general liability coverage of not less than the above stated limits.
                </Typography>

                <Typography gutterBottom align="justify">
                    <b>2.3.</b> The FACILITY USER also agrees to have the Most Reverend Mar Jacob Angadiath, Bishop of the St Thomas Syro-Malabar Diocese of Chicago, and his Successors in Office named as an “Additional Insured” on its general liability policy for the date(s) of Facility usage in relationship to the type of Facility usage for claims which arise out of the FACILITY USER’s operations or are brought against PARISH, the St Thomas Syro-Malabar Diocese of Chicago, or any of their clergy, employees, agents or volunteers by the FACILITY USER’s employees, agents, partners, family members, students, customers, function attendees, guests, invitees, organizational members or associates.
                </Typography>

                <Typography gutterBottom align="justify">
                    <b>2.4.</b> The FACILITY USER also agrees to ensure that its liability insurance policy will be primary in the event of a covered claim or cause of action against PARISH , the St Thomas Syro-Malabar Diocese of Chicago, or any of their clergy, employees, agents or volunteers.
                </Typography>

                <Typography gutterBottom align="justify">
                    <b>2.5.</b> The FACILITY USER hereby agrees to protect, defend, hold harmless and indemnify the PARISH , to include but not limited to, the St Thomas Syro-Malabar Diocese of Chicago, the Most Reverend Mar Jacob Angadiath and his successors in Office, their clergy, employees, agents and volunteers from any and all for any claim or cause of action whatsoever, liability, loss damages, costs to include defense costs, or expenses which are sustained, incurred, or required arising out of the actions of the FACILITY USER in the course of their use of the Facility.
                </Typography>

                <Typography gutterBottom align="justify">
                    <b>2.6.</b> The FACILITY USER also agrees to reimburse the PARISH for any damages or costs, including clean up, incurred to the PARISH  arising out of the use of the Facility.
                </Typography>

                <Typography>
                    <b>3. FACILITY AND EQUIPMENT USE</b>
                </Typography>

                <Typography gutterBottom align="justify">
                    <b>3.1.</b> The FACILITY USER or the individual(s) assigned by FACILITY USER for the Event must be trained in the operation of and recognize the hazards associated with the use of the Facility and its related equipment.
                </Typography>

                <Typography gutterBottom align="justify">---Line Break---</Typography>

                <Typography gutterBottom align="justify">
                    <b>3.2.</b> Prior to the occupation by the FACILITY USER for the Event, the Facility and related equipment will be examined by (St Thomas Syro-Malabar Church, Boston, staff responsible for oversight of this program)  or by the Facility’s manager.
                </Typography>

                <Typography gutterBottom align="justify">
                    <b>3.3.</b> The Facility and equipment must be restored to the PARISH  in the condition it was received. The FACILITY USER is responsible for all reasonable repairs including parts and labor, should damage or malfunction or damage occur during the FACILITY USER’s use or occupancy of the Facility.
                </Typography>

                <Typography gutterBottom align="justify">
                    <b>3.4.</b> The FACILITY USER will be required to post a security deposit of $500.00 with the understanding that said security deposit shall be forfeited in the event of damage to or improper cleaning of the Facility.  The surrender of the security deposit from the FACILITY USER to PARISH shall not limit PARISH  ability to seek full compensation for damages to the Facility or cleaning of the Facility.
                </Typography>


                <Typography>
                    <b>4. ADDITIONAL REQUIREMENTS</b>
                </Typography>

                <Typography gutterBottom align="justify">
                    <b>4.1.</b> Any hazardous or medical waste generated in the Facility by the FACILITY USER will be properly disposed of by the FACILITY USER in accordance with any applicable Federal, State or Local regulations. The FACILITY USER is responsible for proper identification, segregation, and satellite storage of any waste generated by this activity. No waste shall be poured down drains or placed in dumpsters or trash receptacles without approval of the PARISH. Any spills or injuries shall be reported to the PARISH and the St Thomas Syro-Malabar Diocese of Chicago Office of Risk Management immediately.

                </Typography>

                <Typography gutterBottom align="justify">
                    <b>4.2.</b> Each individual using the Facility shall wear proper personal protective equipment and handle any chemicals (including but not limited to cleaning products) as instructed by the PARISH  overseer for maximum personal protection.
                </Typography>
                <Grid container>
                    <Grid item xs={6} align="center"></Grid><Grid item xs={6} align="center"><img src={formData.sign} width="60%" height="60%" alt="Lessor's Signature" /></Grid>
                    <Grid item xs={6} align="center">Signature(PARISH)</Grid><Grid item xs={6} align="center">Signature(Lessor)</Grid>
                    <Grid item xs={6} align="center">Rexy Joseph (SMCB Parish Trustee)</Grid><Grid item xs={6} align="center">{formData.lessor}(Lessor)</Grid>
                    <Grid item xs={6} align="left">Date:</Grid><Grid item xs={6} align="center">Date: {new Date().toISOString()}</Grid>
                </Grid>

            </DialogContent>
            <DialogActions>
                <Button onClick={toPdf}>Generate PDF</Button>
            </DialogActions>

        </Dialog>
        )}
    </ReactToPdf>
}