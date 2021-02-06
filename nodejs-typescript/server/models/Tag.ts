import * as mongoose from 'mongoose'
export let Schema = mongoose.Schema;

export interface ITag extends mongoose.Document {
  name: string;
  date?: any;
};

export const TagSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Tag = mongoose.model<ITag>('Tag', TagSchema);
export default Tag;
