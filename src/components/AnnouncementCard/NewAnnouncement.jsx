import { useState, React } from 'react';
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';

const Header2 = styled.h2`
   font-family: Arial;
   font-weight: bold;
   font-size: 18px;
   line-height: 25px;
   margin-top: 10px;
`;
const InputContainer = styled.div`
   display: flex;
   flex-direction: column;
   margin: 10px 0px 0px 32px;
   width: 75%;
`;
const StyledField = styled(Form.Control)`
   width: 100%;
   margin-top: 10px;
`;
const ButtonContainer = styled.div`
   text-align: right;
   margin-right: 32px;
`;

export default () => {
   const [title, setTitle] = useState('');
   const [hyperlink, setHyperlink] = useState('');
   const [content, setContent] = useState('');

   return (
      <div>
         <ButtonContainer>
            <Button variant="danger">Review</Button>
         </ButtonContainer>
         <Form>
            <Form.Row>
               <InputContainer>
                  <StyledField
                     class="text-center"
                     required
                     type="text"
                     defaultValue={title}
                     onChange={(e) => {
                        setTitle(e.target.value);
                     }}
                     size="lg"
                     placeholder="Announcement Title"
                  />
               </InputContainer>
               <InputContainer>
                  <Header2>Link</Header2>
                  <StyledField
                     class="text-center"
                     required
                     type="text"
                     defaultValue={hyperlink}
                     onChange={(e) => {
                        setHyperlink(e.target.value);
                     }}
                     size="lg"
                     placeholder="Hyperlink (optional)"
                  />
                  <Header2>Body</Header2>
                  <StyledField
                     class="text-center"
                     required
                     type="text-area"
                     defaultValue={content}
                     onChange={(e) => {
                        setContent(e.target.value);
                     }}
                     as="textarea"
                     rows={7}
                     placeholder="Write the announcement here..."
                  />
               </InputContainer>
            </Form.Row>
         </Form>
      </div>
   );
};
