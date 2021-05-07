import { React, useState } from 'react';
import 'antd/dist/antd.css';
import { DatePicker, Space } from 'antd';
import { Form, Button, Col } from 'react-bootstrap';
import styled from 'styled-components';
import moment from 'moment-timezone';

const { RangePicker } = DatePicker;

const ButtonContainer = styled.div`
   text-align: right;
   margin-right: 32px;
`;

const StyledField = styled(Form.Control)`
   margin-left: 33px;
   margin-top: -7px;
   margin-bottom: 3px;
   font-size: 18px;
   padding: 2px 5px;
   width: calc(100vw - 65px);
   @media only screen and (min-width: 768px) {
      margin-left: auto;
      margin-right: auto;
      width: calc(40vw - 65px);
      min-width: 400px;
      max-width: 500px;
   }
`;

const StyledLabel = styled(Form.Label)`
   margin-left: 33px;
   font-size: 18px;
   font-family: 'Nunito Sans', sans-serif;
   font-weight: 700;
   @media only screen and (min-width: 768px) {
      width: calc(40vw - 65px);
      margin-left: auto;
      margin-right: auto;
   }
`;

const StyledContainer = styled.div`
   display: flex
   flex-direction: column;
   justify-content: space-between;
   @media only screen and (min-width: 768px) {
      margin-right: auto;
      margin-left: auto;
      width: calc(40vw - 65px);
      min-width: 400px;
      max-width: 500px;
   }
`;

export default () => {
   const [validated, setValidated] = useState(false);
   const [startTimestamp, setStartTimestamp] = useState('');
   const [endTimestamp, setEndTimestamp] = useState('');
   const [primary, setPrimary] = useState('');
   const [secondary, setSecondary] = useState('');
   const [backup, setBackup] = useState('');

   const onChange = (value, dateString) => {
      console.log('Selected Time: ', value);
      console.log('Formatted Selected Time: ', dateString);
   };

   const onOk = (value) => {
      console.log('onOk: ', value);
      setStartTimestamp(moment[0]);
      setEndTimestamp(moment[1]);
   };

   const handleSubmit = async (e) => {
      const form = e.currentTarget;
      e.preventDefault();
      if (form.checkValidity() === false) {
         e.stopPropagation();
      } else {
         console.log('Start');
         console.log(startTimestamp);
         console.log('End');
         console.log(endTimestamp);
         setValidated(true);
      }
   };

   const disabledDate = (current) => current && current < moment().endOf('day');

   moment.tz.setDefault('America/Los_Angeles');

   return (
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
         <StyledContainer>
            <Form.Row>
               <ButtonContainer>
                  <Button variant="close">x</Button>
               </ButtonContainer>
               <ButtonContainer>
                  <Button variant="submit">Save</Button>
               </ButtonContainer>
            </Form.Row>
            <h1>Create Shift</h1>
            <Space direction="horizontal" size={15}>
               <RangePicker
                  size="large"
                  disabledDate={disabledDate}
                  showTime={{
                     hideDisabledOptions: true,
                     defaultValue: [
                        moment('00:00', 'H:mm AM/PM'),
                        moment('11:59:59', 'H:mm AM/PM'),
                     ],
                  }}
                  defaultValue={[startTimestamp, endTimestamp]}
                  format="DD-MM-YYYY H:mm AM/PM"
                  onOk={onOk}
                  onChange={onChange}
               />
            </Space>
            <h5>Pacific Daylight Time (GMT-7)</h5>
            <hr />
            <Form.Row>
               <Form.Group as={Col} md="4" controlId="validationCustom01">
                  <StyledLabel>Primary</StyledLabel>
                  <StyledField
                     type="text"
                     defaultValue={primary}
                     onChange={(e) => setPrimary(e.target.value)}
                  />
               </Form.Group>
            </Form.Row>
            <Form.Row>
               <Form.Group as={Col} md="4" controlId="validationCustom01">
                  <StyledLabel>Secondary</StyledLabel>
                  <StyledField
                     type="text"
                     defaultValue={secondary}
                     onChange={(e) => setSecondary(e.target.value)}
                  />
               </Form.Group>
            </Form.Row>
            <Form.Row>
               <Form.Group as={Col} md="4" controlId="validationCustom01">
                  <StyledLabel>Backup</StyledLabel>
                  <StyledField
                     type="text"
                     defaultValue={backup}
                     onChange={(e) => setBackup(e.target.value)}
                  />
               </Form.Group>
            </Form.Row>
         </StyledContainer>
      </Form>
   );
};
