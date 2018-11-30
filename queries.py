subTest = '''SELECT body,author,score 
FROM [fh-bigquery:reddit_comments.2017_04] 
WHERE score>500 
AND body!='[removed]' 
AND body!='[deleted]' 
AND subreddit='cats' OR subreddit = 'feetsies'
LIMIT 100'''