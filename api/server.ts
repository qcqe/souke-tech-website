import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: 'smtp.qq.com',
  port: 465,
  secure: true,
  auth: {
    user: '897916697@qq.com',
    pass: '请在此输入您的QQ邮箱授权码',
  },
});

interface ContactForm {
  name: string;
  company: string;
  email: string;
  industry: string;
  description: string;
}

app.post('/api/contact', async (req, res) => {
  try {
    const formData: ContactForm = req.body;
    
    const mailOptions = {
      from: '"搜客科技" <1106588888@qq.com>',
      to: '1106588888@qq.com',
      subject: `【搜客科技咨询】${formData.name} - ${formData.company}`,
      text: `
姓名：${formData.name}
公司：${formData.company}
邮箱：${formData.email}
行业：${formData.industry}
需求描述：
${formData.description}
      `.trim(),
    };

    await transporter.sendMail(mailOptions);
    
    res.status(200).json({ message: '邮件发送成功！我们将尽快与您联系。' });
  } catch (error) {
    console.error('邮件发送失败:', error);
    res.status(500).json({ message: '邮件发送失败，请稍后重试或直接拨打我们的电话。' });
  }
});

app.listen(PORT, () => {
  console.log(`服务器运行在 http://localhost:${PORT}`);
});
