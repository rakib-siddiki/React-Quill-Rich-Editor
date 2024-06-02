'use client';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import './editor.css';
import { SkeletonLoader } from './EditorSkeleton';

const ReactQuill = dynamic(
  async () => {
    const ReactQuill = await import("react-quill");
    const { Quill } = ReactQuill.default;
    const Block = Quill.import("blots/block") as { tagName: string };
    Block.tagName = "div";
    Quill.register(Block);

    return ReactQuill;
  },
  {
    ssr: false,
    loading: () => <SkeletonLoader />,
  }
);

interface IProps {
    onChange: (e: string) => void;
    value: string;
    placeholder?: string;
}

const Editor = ({ value, onChange, placeholder }: IProps) => {
    // const [value, setValue] = useState('');

    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [
                { list: 'ordered' },
                { list: 'bullet' },
                { indent: '-1' },
                { indent: '+1' }
            ],
            ['link', 'image'],
            ['clean']
        ]
    };

    const formats = [
        'header',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'indent',
        'link',
        'image'
    ];

    return (
        <div className=''>
            <ReactQuill
                theme='snow'
                modules={modules}
                formats={formats}
                value={value}
                onChange={onChange}
                placeholder={placeholder ?? 'Write message...'}
            ></ReactQuill>
        </div>
    );
};

export default Editor;
