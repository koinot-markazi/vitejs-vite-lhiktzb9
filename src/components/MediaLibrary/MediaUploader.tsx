import React, { useCallback, useState } from 'react';
import { Upload, X } from 'lucide-react';
import { useDropzone } from 'react-dropzone';
import { supabase } from '../../lib/supabase';
import { useAuthStore } from '../../stores/authStore';

interface MediaUploaderProps {
  onUploadComplete?: (url: string) => void;
}

export const MediaUploader: React.FC<MediaUploaderProps> = ({ onUploadComplete }) => {
  const [uploading, setUploading] = useState(false);
  const user = useAuthStore((state) => state.user);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (!user) return;

    setUploading(true);
    try {
      for (const file of acceptedFiles) {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `${user.id}/${fileName}`;

        // Upload file to Supabase Storage
        const { error: uploadError, data } = await supabase.storage
          .from('media')
          .upload(filePath, file);

        if (uploadError) throw uploadError;

        // Get public URL
        const { data: { publicUrl } } = supabase.storage
          .from('media')
          .getPublicUrl(filePath);

        // Save media record to database
        const { error: dbError } = await supabase
          .from('media')
          .insert({
            filename: fileName,
            original_filename: file.name,
            mime_type: file.type,
            size: file.size,
            url: publicUrl,
            uploaded_by: user.id,
          });

        if (dbError) throw dbError;

        onUploadComplete?.(publicUrl);
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    } finally {
      setUploading(false);
    }
  }, [user, onUploadComplete]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif'],
      'application/pdf': ['.pdf'],
      'video/*': ['.mp4', '.webm'],
    },
  });

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
        ${isDragActive ? 'border-primary-500 bg-primary-50' : 'border-gray-300 hover:border-primary-500'}`}
    >
      <input {...getInputProps()} />
      <Upload className="mx-auto h-12 w-12 text-gray-400" />
      <p className="mt-2 text-sm text-gray-600">
        {isDragActive
          ? 'Drop the files here...'
          : 'Drag & drop files here, or click to select files'}
      </p>
      {uploading && (
        <div className="mt-4">
          <div className="animate-pulse bg-primary-100 h-2 rounded-full" />
          <p className="mt-2 text-sm text-gray-500">Uploading...</p>
        </div>
      )}
    </div>
  );
};