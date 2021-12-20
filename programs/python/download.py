from pytube import YouTube
yt = YouTube("https://www.youtube.com/watch?v=W2a4IcyPZwM&list=PLheTWQwPTFF5WUj7UJIvM8j8R9yZ9dWiS&index=2&t=934s")
yt.streams.first().download('/home/uzrnem/library/programs/python/new.mp4')
