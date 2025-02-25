"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
}

const VideoModal = ({ isOpen, onClose }: VideoModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[90vw] max-h-[90vh] p-0">
        <div className="relative w-full pt-[56.25%]">
          <video
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            controls
            autoPlay
            src="/video/marketing.mp4"
          >
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default VideoModal

