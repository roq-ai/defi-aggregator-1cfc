import * as yup from 'yup';

export const nftValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  image: yup.string(),
  creator_id: yup.string().nullable(),
});
