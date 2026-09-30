import express from 'express';
import 'dotenv/config';
import cors from 'cors';

import { connectMongoDB } from './db/connectMongoDB';
import { notFoundHandler } from './middleware/notFoundHandler';
import { logger } from './middleware/logger';
import { errorHandler } from './middleware/errorHandler';
import { Router } from 'express';
import { deleteNote, getAllNotes, updateNote } from './routes/notesRoutes';
import { createNote } from './routes/notesRoutes';

const app = express();
const PORT = process.env.PORT ?? 3000;
const router = Router();

app.use(express.json());
app.use(cors());
app.use(logger);

router.get('/notes/', getAllNotes);
router.get('/notes/:noteId');
router.post('/notes/', createNote);
router.delete('/notes/:noteId', deleteNote);
router.patch('/notes/:noteId', updateNote);

app.use(notFoundHandler);
app.use(errorHandler);

await connectMongoDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
