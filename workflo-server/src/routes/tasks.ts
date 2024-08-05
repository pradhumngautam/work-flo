import express from 'express';
import { PrismaClient } from '@prisma/client';
import { auth } from '../middleware/auth';

const router = express.Router();
const prisma = new PrismaClient();

router.get('/', auth, async (req, res) => {
  try {
    const tasks = await prisma.task.findMany({
      where: { userId: req.user?.userId },
      orderBy: { createdAt: 'desc' },
    });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
});

router.post('/', auth, async (req, res) => {
  const { title, description, status, priority, deadline } = req.body;

  try {
    const task = await prisma.task.create({
      data: {
        title,
        description,
        status,
        priority,
        deadline: deadline ? new Date(deadline) : undefined,
        userId: req.user?.userId as string,
      },
    });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
});

router.put('/:id', auth, async (req, res) => {
  const { id } = req.params;
  const { title, description, status, priority, deadline } = req.body;

  try {
    const task = await prisma.task.findUnique({
      where: { id },
    });

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    if (task.userId !== req.user?.userId) {
      return res.status(403).json({ message: 'Not authorized' });
    }

    const updatedTask = await prisma.task.update({
      where: { id },
      data: {
        title,
        description,
        status,
        priority,
        deadline: deadline ? new Date(deadline) : undefined,
      },
    });

    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
});

router.delete('/:id', auth, async (req, res) => {
  const { id } = req.params;

  try {
    const task = await prisma.task.findUnique({
      where: { id },
    });

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    if (task.userId !== req.user?.userId) {
      return res.status(403).json({ message: 'Not authorized' });
    }

    await prisma.task.delete({
      where: { id },
    });

    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
});

export default router;